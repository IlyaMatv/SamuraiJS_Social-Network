import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { reduxForm, Field } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/validators'
import { TextArea } from '../../common/FormsControls/FormsControls'


const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo((props) => {

  let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>

      <AddNewPostFormRedux onSubmit={onAddPost} />

      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
})




const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>

        <Field name='newPostText' component={TextArea} validate={[required, maxLength10]} placeholder={'Post message'} />

      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

let AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

export default MyPosts