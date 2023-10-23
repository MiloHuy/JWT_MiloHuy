import { useEffect, useState } from "react";
import { useCreatePostMutation } from "../services/post";

function App() {
    const [createPost, createPostResult] = useCreatePostMutation();
    const [username, setUserName] = useState('')
    const [pwd, setPwd] = useState('')
    useEffect(() => {
        if (createPostResult.isLoading === false && createPostResult.isSuccess) {
            console.log("Create post data", createPostResult.data);
        }
    }, [createPostResult]);

    const handleUserInput = (e) => {
        setUserName(e.target.value)
    }

    const handlePwdInput = (e) => {
        setPwd(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost({ username, pwd });
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleUserInput}
                    autoComplete="off"
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={pwd}
                    onChange={handlePwdInput}
                />

                <button type='submit'>Sign In</button>
            </form>

        </div>
    );
}

export default App;