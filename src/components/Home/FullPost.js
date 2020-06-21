import React from 'react'

const FullPost = () => {
    return(
        <div className="post my-3 mx-auto px-2" style={{maxWidth:"800px"}}>
            <div className="bg-white rounded py-2 px-4">
                <div className="meta-data font-weight-bold text-lg">
                    Posted By Anonymuse <span className="float-right pr-3"> 10min Ago</span>
                </div>
                <div className="post-centent mt-2">
                    Good market for iPhone and its apps, the rising number of IT companies offering iPhone apps development services and lack of thoroughly talented developers are the main reasons resulting in increasing demand for the fluent iOS developers across the globe. Highest salaries one can expect in the IT sector and world of opportunities available in this sector makes iPhone development one of the most desired or chosen professions of the present times.
                    <br/>
                </div>
                <div className="action border-top mt-4">
                    <div className="row">
                        <div className="py-2 px-0 col-6 hover">
                            <div className="text-center text-success border-right pointer">
                                Upvote (20)
                            </div>
                        </div>
                        <div className="py-2 px-0 col-6 hover">
                            <div className="text-center text-danger pointer">
                                Comment (30)
                            </div>
                        </div>
                    </div>
                </div>
                <div className="comments border-top mt-2">
                    <div className="commentbox py-2 border-bottom">
                        <textarea className="w-100" placeholder="Add new comment here" />
                        <div className="buttons">
                        </div>
                    </div>
                    <div className="commentbox py-2 border-bottom">
                        <div className="row">
                            <div className="col-12 px-0 py-0">
                                this is My comment
                            </div>
                            <div className="col-12 text-muted px-0 py-0">
                                10 min ago -
                                Suryaprakash Agarwal
                            </div>
                        </div>   
                    </div>
                    <div className="commentbox py-2 border-bottom">
                        <div className="row">
                            <div className="col-12 px-0 py-0">
                                this is My comment
                            </div>
                            <div className="col-12 text-muted px-0 py-0">
                                10 min ago -
                                Suryaprakash Agarwal
                            </div>
                        </div>   
                    </div>
                    <div className="commentbox py-2 border-bottom">
                        <div className="row">
                            <div className="col-12 px-0 py-0">
                                this is My comment
                            </div>
                            <div className="col-12 text-muted px-0 py-0">
                                10 min ago -
                                Suryaprakash Agarwal
                            </div>
                        </div>   
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default FullPost;