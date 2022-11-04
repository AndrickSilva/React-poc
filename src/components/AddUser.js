import React from 'react'

const AddUser = () => {
    return (
        <div className='container shadow my-4 p-4' style={{maxWidth: "40em"}}>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label d-flex fw-bolder fs-5">Name</label>
                    <input type="text" class="form-control shadow-none rounded-0" id="name" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="username" class="form-label d-flex fw-bolder fs-5">Username</label>
                    <input type="text" class="form-control shadow-none rounded-0" id="username" />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label d-flex fw-bolder fs-5">E-mail</label>
                    <input type="email" class="form-control shadow-none rounded-0" id="email" />
                </div>
                <div class="mb-3">
                    <label for="phone" class="form-label d-flex fw-bolder fs-5">Phone number</label>
                    <input type="text" class="form-control shadow-none rounded-0" id="phone" />
                </div>
                
                <button type="submit" class="btn btn-primary rounded-0">Submit</button>
            </form>
        </div>
    )
}

export default AddUser