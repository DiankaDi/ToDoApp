import React from "react";

class Navbar extends React.Component {

    constructor() {
        super();

        this.state = {
            items: [
                { id:1, title:'TODO'},
                { id:1, title:'MyDay'},
                { id:1, title:'List-1'}
            ]
        }

    }
    render() {
        const clickItem = () =>{
            alert('To be continued...')
        }

        const { items } = this.state;

        const  listItems = items.map(item => <p className='item' onClick={clickItem} key={this.id}>{item.title}</p>)

        return(
            <div className='navbar'>
                <div className='account_item'>
                    <img className='acc_img'
                         src='https://lh3.googleusercontent.com/proxy/czKzLb8EE4Ld2J9NcIsmR1sErV14VMH8XdMZDI7XovuBifpIpG2sfUegOItOhpkrzTHR8pPZ0ANaklCd6N5sjrCo8UmzybHpBPtHN0mCegSyiY9MCIzV'/>
                    <p className='acc_text'>Your Account</p>
                </div>
                <hr/>
                <div className='items'>
                        {listItems}
                </div>
            </div>
        )
    }

}

export default Navbar;