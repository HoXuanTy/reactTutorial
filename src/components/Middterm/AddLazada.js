import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
import DataTable from "react-data-table-component";

export default class AddLazada extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
       
        axios.get("http://127.0.0.1:8000/api/get-lazada")
           .then((response) => {
            this.setState({ products: response.data });
           })
           .catch((error) => {
            console.error("Error fetching products:", error);
          });
    }

    previewImage = () => {
        let reader = new FileReader();
        reader.onload = (e) => {
            $("#preview-image-before-upload").attr("src", e.target.result);
        };
        reader.readAsDataURL(this.state.fileUpload);
    };


    // previewImage() {
    //     $(document).ready(function (e) {
    //         $("#inputImage").change(function () {
    //             let reader = new FileReader();
    //             reader.onload = (e) => {
    //                 $("#preview-image-before-upload").attr("src", e.target.result);
    //             };
    //             reader.readAsDataURL(this.files[0]);
    //         });
    //     });
    // }

    // async onSubmitHandle(e) {
    //     e.preventDefault();

    //     const fd = new FormData();
    //     fd.append("uploadImage", this.state.fileUpload);

    //     if ($("#inputImage").val().split("\\")[2]) {
    //         await axios
    //             .post(`http://127.0.0.1:8000/api/upload-image`, fd)
    //             .then((res) => {
    //             });
    //     }
    //     await axios
    //         .post(`http://127.0.0.1:8000/api/add-product`, {
    //             name: $("#inputName").val(),
    //             image: $("#inputImage").val().split("\\")[2],
    //             shop_image: $("#inputShop_image").val().split("\\")[2],
    //         })
    //         .then((res) => {
    //             $("#inputImage").val("")
    //             alert("Thêm thành công");
    //             $("#closeModalAddBtn").click();
    //             this.componentDidMount();
    //         })
    //         .catch("Thêm không thành công");
    // }

    onSubmitHandle = async (e) => {
        e.preventDefault();

        const fd = new FormData();
        fd.append("uploadImage", this.state.fileUpload);
        fd.append("uploadShopImage", this.state.shopImageUpload);

        if ($("#inputImage").val().split("\\")[2]) {
            await axios.post(`http://127.0.0.1:8000/api/upload-image`, fd);
        }

        const productData = {
            name: $("#inputName").val(),
            image: this.state.fileUpload.name,
            shop_image: this.state.shopImageUpload.name,
        };

        await axios
            .post(`http://127.0.0.1:8000/api/add-product`, productData)
            .then((res) => {
                $("#inputImage").val("");
                $("#inputShop_image").val("");
                alert("Thêm thành công");
                $("#closeModalAddBtn").click();
                this.componentDidMount();
            })
            .catch((error) => {
                console.error("Thêm không thành công", error);
            });
    };



    // handleChange = (file) => {
    //     this.setState({ fileUpload: file[0] });
    // };
    handleChange = (e) => {
        const file = e.target.files[0];
        const id = e.target.id;

        if (id === "inputImage") {
            this.setState({ fileUpload: file });
        } else if (id === "inputShop_image") {
            this.setState({ shopImageUpload: file });
        }
    };


    columns=[
        {
            name: "ID",
            selector: "id",
            sortable: true,
        },
        {
            name: "Image",
            cell: (row) => <img src={`http://localhost:8000/Source/image/product/${row.image}`} alt="Product" style={{ width: "100px" }} />,
            
        },
        {
            name: "Name",
            selector: "name",
            sortable: true,
        },
        {
            name: "Shop Image",
            cell: (row) => <img src={`http://localhost:8000/Source/image/product/${row.shop_image}`} alt="Shop" style={{ width: "100px" }} />,
        }
    ]


    render() {
        const { products } = this.state;
        return (

            <div>
          
                <div>
                    <form onSubmit={this.onSubmitHandle.bind(this)} enctype="multipart/form-data">
                        <input
                            type="text"
                            id="inputName"
                            placeholder="Product Name"
                        />
                        <input
                            type="file"
                            id="inputImage"
                            onChange={this.handleChange}
                        />
                        <input
                            type="file"
                            id="inputShop_image"
                            onChange={this.handleChange}
                        />
                        <button type="submit">Add Product</button>
                    </form>

                    <DataTable
                        title="Product List"
                        columns={this.columns}
                        data= { this.state.products }
                    />
                </div>

            </div>
        )
    }
}
