import React, { Component } from 'react'

export class ContactForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: '',
            lname: '',
            message: '',
        }
    }
    handleFirstNameChange = (event) => {
        this.setState({
            fname: event.target.value,
        })
    }
    handleLastNameChange = (event) => {
        this.setState({
            lname: event.target.value,
        })
    }
    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value
        })
    }
    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <section className='w-100 h-[800px]'>

                <div className='w-full h-[800px] bg-gray-800/90 absolute'>
                    <div className='w-full h-full object-cover mix-blend-overlay contact'></div>
                </div>

                <h2 className='relative text-center text-3xl py-8 text-slate-300 uppercase'>Get in Touch</h2>
                <form onSubmit={this.handleSubmit} className='relative sm:flex-row lg:w-[40%] w-[100%] mx-auto bg-transparent h-[100]my-20 lg:px-10 px-2'>
                    <div className='w-full p-2 mr-4 rounded-md mb-4'>
                        <label htmlFor="id-fname">First Name</label>
                        <input className='border-1 border-black w-[100%] py-2'
                            value={this.state.fname}
                            onChange={this.handleFirstNameChange}
                            id="id-fname"
                            name="fname"
                            type="text"
                            placeholder=' First Name Here..'
                        />
                    </div>
                    <div className='w-full p-2 mr-4 rounded-md mb-4'>
                        <label htmlFor="id-lname">Last Name</label>
                        <input className='border-1 border-black w-[100%] py-2'
                            value={this.state.lname}
                            onChange={this.handleLastNameChange}
                            id="id-lname"
                            name="lname"
                            type="text"
                            placeholder=' Last Name Here..'
                            />
                    </div>
                    <div className='w-full p-2 mr-4 rounded-md mb-4'>
                        <label htmlFor="id-category">Query category</label>
                        <select className='w-[100%] py-2'
                            id="id-category"
                            name="category"
                            value={this.state.category}
                            onChange={this.handleCategoryChange}
                        >
                            <option value="website">Website issue</option>
                            <option value="order">Order issue</option>
                            <option value="general">General inquiry</option>

                        </select>
                    </div>
                    <div className='w-full p-2 mr-4 rounded-md mb-4'>
                        <label htmlFor="id-comments">Message</label>
                        <textarea className='border-1 border-black w-[100%] h-[200px]'
                            id="id-message"
                            name="message"
                            placeholder=' Type Message Here..'
                            value={this.state.message}
                            onChange={this.handleMessageChange}
                        />
                    </div>
                    <div className='w-full mr-4 mx-auto'>
                        <input className='bg-indigo-600 text-2xl text-white w-[100%] p-3 rounded-md mb-4 cursor-pointer' type="submit" value="Submit message" />   
                    </div>
                   
                </form>
            </section>
        )
    }
}

export default ContactForm