import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Navbar() {
  return (
    <View className="flex-row items-center justify-between px-4 py-3 shadow-md">
      
      <TouchableOpacity>
        <Ionicons name="home-outline" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="list-outline" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="contract-outline" size={24} color="white" />
      </TouchableOpacity>


      <TouchableOpacity>
        <Ionicons name="repeat-outline" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="bar-chart-outline" size={24} color="white" />
      </TouchableOpacity>

    </View>
  );
}
