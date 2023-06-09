import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
import DataTable from "react-data-table-component";

export default class Lazada extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    async componentDidMount() {
        await axios.get("http://127.0.0.1:8000/api/get-lazada").then((res) => {
            this.setState(() => ({ products: res.data }));
        });
    }


    previewImage() {
        $(document).ready(function (e) {
            $("#inputImage").change(function () {
                let reader = new FileReader();
                reader.onload = (e) => {
                    $("#preview-image-before-upload").attr("src", e.target.result);
                };
                reader.readAsDataURL(this.files[0]);
            });
        });
    }

    async onSubmitHandle(e) {
        e.preventDefault();

        const fd = new FormData();
        fd.append("uploadImage", this.state.fileUpload);

        if ($("#inputImage").val().split("\\")[2]) {
            await axios
                .post(`http://127.0.0.1:8000/api/upload-image`, fd)
                .then((res) => {
                });
        }
        await axios
            .post(`http://127.0.0.1:8000/api/add-product`, {
                name: $("#inputName").val(),
                image: $("#inputImage").val().split("\\")[2],
                shop_image: $("#inputShop_image").val().split("\\")[2],
            })
            .then((res) => {
                $("#inputImage").val("")
                alert("Thêm thành công");
                $("#closeModalAddBtn").click();
                this.componentDidMount();
            })
            .catch("Thêm không thành công");
    }


    handleChange = (file) => {
        this.setState({ fileUpload: file[0] });
    };



    render() {
        const { products } = this.state;
        return (
        
            <div>
                <div className="Card_container">
                        {products.map((product) => (
                            <div key={product.id} className="card">
                                    <img src={`http://localhost:8000/source/image/product/${product.image}`} alt="ảnh lỗi"/>
                                    <p className="card-shop-img"><img src={`http://localhost:8000/source/image/product/${product.shop_image}`} alt="ảnh lỗi" /></p>
                                <div className="card-body">
                                    <h1 className="card-text">{product.name}</h1>
                                </div>
                            </div>
                        ))}
                </div>

                {/* add product */}

                

            </div>
    )
  }
}
