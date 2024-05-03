import { Button } from '@nextui-org/react';
import React, { useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa';

export type ImageUploaderProps = {
  fileArr: File[],
  setFileArr: (newArr: File[]) => void
}

const ImageUploader: React.FC<ImageUploaderProps> = (props: ImageUploaderProps) => {
  const [imageArr, setImageArr] = useState<string[]>([])

  const addImage = () => {
    if (imageArr.length >= 2) return
    let input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/png, image/gif, image/jpeg, image/*'
    input.onchange = _ => {
      if (input.files) {
        if (input.files.length > 0) {
          // url
          let tempArr = [...imageArr]
          tempArr.push(URL.createObjectURL(input.files[0]))
          setImageArr(tempArr)
          console.log(`imgArr: ${imageArr.length}`)

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
    setImageArr([
      ...imageArr.slice(0, index),
      ...imageArr.slice(index + 1, imageArr.length)
    ]);
    props.setFileArr([
      ...props.fileArr.slice(0, index),
      ...props.fileArr.slice(index + 1, imageArr.length)
    ])
  }

  const renderImages = () => imageArr.map((val, index) => (
    <div key={index}>
      <Button
        className='relative top-12 left-3'
        color='danger'
        onClick={() => deleteImage(index)}
      >
        Delete
      </Button>
      <img src={val} />
    </div>
  ))

  return (
    <div className='p-3 bg-slate-800 rounded-xl'>
      <p>Attach Image</p>
      <br />
      <div>
        <p>Image Selected: {imageArr.length} / Max 2</p>
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
