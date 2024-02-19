import { useRouter } from 'next/router'

const Post = () => {

    const router = useRouter()
    const { id, nestednewsid } = router.query

    return <>
        <p>Post: {id}</p>
        <p>Post: {nestednewsid}</p>
        <p>Post: {nestednewsid}</p>
        <p>Post: {nestednewsid}</p>
        <p>Post: {nestednewsid}</p>
    </>
}

export default Post