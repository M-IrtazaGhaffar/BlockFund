import React from 'react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
// import {Editor as ClassicEditor} from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'
// import { bgcolor } from '@mui/system';
// import "../styles/Word.css";

const Word = () => {
	return (
		<div>
			<div className="word">
				<CKEditor
					className='ckeditor'
					editor={Editor}
					// key={bgcolor}
					data=""
					onReady={editor => {
						// You can store the "editor" and use when it is needed.
						console.log('Editor is ready to use!', editor);
					}}
					onChange={(event, editor) => {
						const data = editor.getData();
						console.log({ event, editor, data });
					}}
					onBlur={(event, editor) => {
						console.log('Blur.', editor);
					}}
					onFocus={(event, editor) => {
						console.log('Focus.', editor);
					}}
				/>
			</div>
		</div>
	)
}

export default Word;