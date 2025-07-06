import React from 'react'
import { View, Text } from 'react-native'

const TaskCard = () => {
  return (
    // default color - bg-[#1e1e1e]
    <View className='w-[22rem] h-24 bg-blue-500 rounded-2xl items-center justify-center'>
      <Text className='text-white text-2xl font-medium pb-1'>Drink Water</Text>
      <Text className='text-white text-xs absolute bottom-3 left-3'>Time left - 1 hour</Text>
    </View>
  )
}

export default TaskCard