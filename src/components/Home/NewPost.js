import React from 'react';
import Editor from './Editor';

class NewPost extends React.Component {

    state = this.props.initialValues

    onChangeHandle = (eve) =>{
        this.setState({
            [eve.target.name] : eve.target.value
        })
    }

    render(){
        return (
            <div className="w-100 bg-white px-4 py-4 mt-3 shadow rounded">
                <h5 className="text-primary text-center font-weight-semibold "> New Post </h5>
                <form>
                    <div className="form-group col-12">
                        <label htmlFor="category">Category</label>
                        <select name="category" id="category" className="form-control" onChange={this.onChangeHandle}>
                            <option value="general"> General </option>
                            <option value="interview"> Interview </option>
                            <option value="competitive"> Competitive </option>
                        </select>
                    </div>
                    <div className="form-group col-12 mt-3">
                    <label>Description</label>
                        <Editor placeHolder="Description" />
                    </div>
                    <div className="form-group row mt-3">
                        <div className="col-sm-2 px-0"> Posted By : </div>
                        <div className="col-sm-10 px-0">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" for="gridCheck1">
                                Post this Anonymously
                            </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <button className="btn btn-outline-primary px-4"> Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewPost;