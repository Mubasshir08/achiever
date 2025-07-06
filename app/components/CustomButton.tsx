import React from 'react'
import {  Text, Pressable } from 'react-native'

const CustomButton = () => {
  return (
    <Pressable className='w-16 h-16 bg-yellow-500 rounded-lg items-center justify-center absolute bottom-24 right-5'>
      <Text className='text-3xl'>+</Text>
    </Pressable>
  )
}

export default CustomButton