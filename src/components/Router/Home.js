import React, { Component } from 'react'

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
                    <img src={require(`../../../public${item.image}`)} alt="Hình ảnh không tồn tại" />
                  </td>
                  
                  <td className="table-data">{item.tinhtranghang}</td>
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