import React, { Component } from 'react'

export class ContactForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: '',
            lname: '',
            email: '',
            category: 'website',
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
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value,
        })
    }
    handleSubmit = () => {
        console.log(this.state)
    }
    render() {
        return (
            <section name='contact' className='w-100 h-[800px]'>
                <div className='w-full h-[800px] bg-gray-800/90 absolute'>
                    <div className='w-full h-full object-cover mix-blend-overlay contact'></div>
                </div>
                <h2 className='relative text-center text-3xl lg:pt-16 pt-10 pb-12 text-slate-300 uppercase'>Get in Touch</h2>
                <form onSubmit={this.handleSubmit} className='relative sm:flex-row lg:w-[40%] w-[100%] mx-auto bg-transparent h-[100]my-20 lg:px-10 px-2'>
                    <div className='grid grid-cols-2 w-full p-2 mr-4 rounded-md mb-4'>
                        <div className='flex mr-2'>
                            <input className='rounded-md w-[100%] px-4 py-3'
                                value={this.state.fname}
                                onChange={this.handleFirstNameChange}
                                id="id-fname"
                                name="fname"
                                type="text"
                                placeholder=' First Name'
                            />
                        </div>
                        <div className='flex ml-2'>
                            <input className='rounded-md w-[100%] px-4 py-3'
                                value={this.state.lname}
                                onChange={this.handleLastNameChange}
                                id="id-lname"
                                name="lname"
                                type="text"
                                placeholder=' Last Name'
                            />
                        </div>
                    </div>
                    <div className='flex w-full p-2 mr-4 rounded-md mb-4'>
                        <input className='rounded-md w-[100%] py-3 px-4'
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            id="id-email"
                            name="email"
                            type="text"
                            placeholder=' Email Address'
                            />
                    </div>
                    <div className='w-full p-2 mr-4 rounded-md mb-4'>    
                        <select className='w-[100%] rounded-md py-3 px-4'
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
                    <div className='w-full p-2 mr-4 rounded-md'>
                        <textarea className='rounded-md w-[100%] h-[200px] py-3 px-4'
                            id="id-message"
                            name="message"
                            placeholder=' Message'
                            value={this.state.message}
                            onChange={this.handleMessageChange}
                        />
                    </div>
                    <div className='w-full mr-4 mx-auto p-2'>
                        <input className='bg-indigo-600 text-2xl text-white w-[100%] p-3 rounded-md mb-4 cursor-pointer' type="submit" value="Submit message" />   
                    </div>
                </form>
            </section>
        )
    }
}

export default ContactForm