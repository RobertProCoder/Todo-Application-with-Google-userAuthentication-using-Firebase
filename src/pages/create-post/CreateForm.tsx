import {FC} from 'react';
import '../../css/post-form.css';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {addDoc,collection} from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../../config/firebase';
import { useNavigate } from 'react-router-dom';


interface CreateFormData {
    title:string,
    description:string
}


export const CreateForm:FC = () => {


    const schema = yup.object().shape({
        title:yup.string().required(),
        description:yup.string().required(),
    });


    const {register,handleSubmit,formState:{errors}} = useForm<CreateFormData>({
        resolver:yupResolver(schema),
    })

    const postRef = collection(db,'posts');

    const [user] = useAuthState(auth);
    const nagivate = useNavigate();

    const controlSubmit = async (data:CreateFormData) => {
        console.log(data)
        await addDoc(postRef,{
            title:data.title,
            description: data.description,
            username:user?.displayName,
            userId:user?.uid
        })

        nagivate('/')
    };
    return (
        <form onSubmit={handleSubmit(controlSubmit)} className='create-post-form'>
            <input type="text" placeholder='Title...' className='title' {...register("title")}/>
            <p style={{color:"red"}} className='error'>{errors.title?.message}</p>
            <textarea placeholder='Description...' className='description'{...register('description')}/>
            <p style={{color:"red"}} className='error'>{errors.description?.message}</p>
            <input type="submit" className='submit-btn'/>
        </form>
    )
}