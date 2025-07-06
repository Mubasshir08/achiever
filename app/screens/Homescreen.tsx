import React from 'react'
import { Text, View } from 'react-native'
// import CustomButton from '../components/CustomButton'
import TaskCard from '../components/TaskCard'

function Homescreen() {
    return (
        <View className='mt-16 ml-7 flex-1'>
            <Text className='text-2xl font-medium text-white'>
                Home
            </Text>
            <View className='mt-7'>
                <TaskCard />
            </View>
            {/* <CustomButton /> */}
        </View>
    )
}

export default Homescreen