import React, { Component } from 'react'
import data from '../Content/data';

export default class DemoStates extends Component {
    constructor(props) {
        // super(props);
        // this.state = {
        //     name: "Võ Công Đinh",
        //     age: 60
            
        // };

        var arr = data('categories');
        super(props);
        this.state = { arr };
    };
    render() {
        // let mess = this.state.age;
        // if (mess > 50) {
        //     return (
        //         <div>
        //             <h2>{this.state.name}</h2>
        //             <p>Bạn đã già rồi{mess}</p>
        //         </div>
        //     );
        // } else {
        //     return (
        //         <div>
        //             <h2>{this.state.name}</h2>
        //             <p>Bạn còn trẻ tuổi là {mess}</p>
        //         </div>
        //     );
        // }

        //sử dụng toán tử 3 ngôi
        //     let status = this.state.age > 50 ? 'Bạn đã già' : 'Bạn còn trẻ';
        //     return (
        //             <div>
        //                 <h2>{this.state.name}</h2>
        //                 {status}
        //             </div>
        //         );
        // }
        
        return (
            <div>{
                this.state.arr.map(key =>
                    <div><h2>{key.name}</h2>
                        <img src={key.image}></img>
                    </div>
                    )
            }
            </div>
        );

    }
}
