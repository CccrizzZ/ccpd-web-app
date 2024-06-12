import { Button } from '@nextui-org/react';
import heic2any from 'heic2any';
import { useAtom } from 'jotai';
import React from 'react'
import { FaPlusCircle } from 'react-icons/fa';
import { showLoadSpinner } from '../atom';

export type ImageUploaderProps = {
  imgArr: string[],
  setImageArr: (newArr: string[]) => void
  fileArr: File[],
  setFileArr: (newArr: File[]) => void
}

const ImageUploader: React.FC<ImageUploaderProps> = (props: ImageUploaderProps) => {
  const [isLoading, setIsLoading] = useAtom(showLoadSpinner);

  const addImage = () => {
    if (props.imgArr.length >= 3) return
    let input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/png, image/gif, image/jpeg, image/heic'
    input.onchange = async _ => {
      if (isLoading) return
      if (input.files) {
        const file = input.files[0]
        if (file.size > 6 * 1024 * 1024) {
          return alert('Single File Cannot Exceed 6MB')
        }
        if (input.files.length > 0) {
          // construct temp array for state update
          let tempImageArr = [...props.imgArr]
          let tempFileArr = [...props.fileArr]

          // check if file is heic format
          if (input.files[0].name.includes('.heic')) {
            setIsLoading(true)
            // convert to jpg and push
            const conversionResult = await heic2any({
              blob: input.files[0],
              toType: "image/jpeg",
            })

            // push the converted url and blob if heic
            tempImageArr.push(URL.createObjectURL(conversionResult as Blob))
            tempFileArr.push(new File([conversionResult as Blob], `${input.files ? input.files[0].name + ".jpeg" : ".jpeg"}`))
            setIsLoading(false)
          } else {
            // push the url and blob if normal
            tempImageArr.push(URL.createObjectURL(input.files[0]))
            tempFileArr.push(input.files[0])
          }
          props.setImageArr(tempImageArr)
          props.setFileArr(tempFileArr)
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
