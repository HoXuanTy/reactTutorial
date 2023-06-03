import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }
    componentDidMount() {
      fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json,
          });
        });
    }

  deleteItem = (id) => {
    // Gửi yêu cầu DELETE đến API để xóa sản phẩm với id
    fetch(`http://localhost:3000/products/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          // Nếu xóa thành công, cập nhật state và giao diện người dùng
          const updatedItems = this.state.items.filter(item => item.id !== id);
          this.setState({
            items: updatedItems
          });
        }
      })
      .catch(error => {
        console.error('Error deleting item:', error);
      });
  }


  
render() {
  const { isLoaded, items } = this.state;
  let stt=0;
  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th className="table-header">STT</th>
                <th className="table-header">Tên sản phẩm</th>
                <th className="table-header">Loại sản phẩm</th>
                <th className="table-header">Hình ảnh</th>
                <th className="table-header">Tình trạng</th>
                <th className="table-header">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td className="table-data">{ ++stt}</td>
                  <td className="table-data">{item.name}</td>
                  <td className="table-data">{item.name_category}</td>
                  <td className="table-data">
                    <img src={item.image}  alt="Hình ảnh không tồn tại" />
                  </td>
                  
                  <td className="table-data">{item.tinhtranghang ? <button style={{ backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '3px' }}>Còn hàng</button>
                    : <button style={{ backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '3px' }}>Hết hàng</button>}</td>
                  <td className="table-data">
                    <button onClick={() => this.deleteItem(item.id)}>Delete</button>&nbsp;
                    <button>
                      <Link to={`/Edit/${item.id}`}>Edit</Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
}

export default Home; 