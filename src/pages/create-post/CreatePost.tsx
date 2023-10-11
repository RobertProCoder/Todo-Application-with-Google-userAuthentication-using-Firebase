import {CreateForm} from './CreateForm';
import '../../css/post-form.css';
export const CreatePost = () => {
    return(
        <div className="post-form">
            <h1>Create Post</h1>
            <CreateForm/>
        </div>
    )
}