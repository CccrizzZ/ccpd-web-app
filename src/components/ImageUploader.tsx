import { Button } from '@nextui-org/react';
import React from 'react'
import { FaPlusCircle } from 'react-icons/fa';

export type ImageUploaderProps = {
  imgArr: string[],
  setImageArr: (newArr: string[]) => void
  fileArr: File[],
  setFileArr: (newArr: File[]) => void
}

const ImageUploader: React.FC<ImageUploaderProps> = (props: ImageUploaderProps) => {
  const addImage = () => {
    if (props.imgArr.length >= 3) return
    let input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/png, image/gif, image/jpeg, image/*'
    input.onchange = _ => {
      if (input.files) {
        if (input.files.length > 0) {
          // url
          let tempArr = [...props.imgArr]
          tempArr.push(URL.createObjectURL(input.files[0]))
          props.setImageArr(tempArr)
          console.log(`imgArr: ${props.imgArr.length}`)

          // blob
          let tempFileArr = [...props.fileArr]
          tempFileArr.push(input.files[0])
          props.setFileArr(tempFileArr)
          console.log(`fileArr: ${props.fileArr.length}`)
        }
      }
    }
    input.click()
  }

  // remove image from array
  const deleteImage = (index: number) => {
    props.setImageArr([
      ...props.imgArr.slice(0, index),
      ...props.imgArr.slice(index + 1, props.imgArr.length)
    ]);
    props.setFileArr([
      ...props.fileArr.slice(0, index),
      ...props.fileArr.slice(index + 1, props.imgArr.length)
    ])
  }

  const renderImages = () => props.imgArr.map((val, index) => (
    <div key={index}>
      <Button
        className='relative top-12 left-8'
        color='danger'
        onClick={() => deleteImage(index)}
      >
        Delete
      </Button>
      <img className='m-auto' src={val} />
    </div>
  ))

  return (
    <div className='p-3 bg-slate-800 rounded-xl'>
      <p>Attach Image</p>
      <br />
      <div>
        <p>Image Selected: {props.imgArr.length} / Max 3</p>
        {renderImages()}
        <div className='grid gap-3 mt-3'>
          <Button onClick={addImage}>
            <FaPlusCircle />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ImageUploader
