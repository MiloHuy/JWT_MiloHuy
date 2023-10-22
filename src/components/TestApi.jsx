import { useEffect } from "react";
import { useCreatePostMutation, useGetPostQuery } from "../services/post";

function App() {
    const getPostResponse = useGetPostQuery();
    const [createPost, createPostResult] = useCreatePostMutation();
    // console.log("createPostResult", createPostResult);
    useEffect(() => {
        if (createPostResult.isLoading === false && createPostResult.isSuccess) {
            console.log("Create post data", createPostResult.data);
        }
    }, [createPostResult]);

    if (getPostResponse.isLoading) {
        return <div>Loading...</div>;
    }

    if (getPostResponse.isError) {
        return <div>Error occured {getPostResponse.error.error}</div>;
    }

    function createPostHandler() {
        createPost({ title: "Generic Title", postBody: "Post body", userId: 1 });
    }

    return (
        <div className="App">
            <div>{getPostResponse.data.title}</div>
            <div>
                <button onClick={() => createPostHandler()}>Create Post</button>
            </div>

        </div>
    );
}

export default App;