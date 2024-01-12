import React from 'react'
import styled from 'styled-components'
import {Canvas} from '@react-three/fiber'
import { OrbitControls,Stage } from '@react-three/drei'
import Duck from './Duck'

const Model = () => {
    return (
        <Canvas>
            <Stage environment="city" intensity={0.6}>
                <Duck/>
            </Stage>
            <OrbitControls enableZoom={false}/>
        </Canvas>
    )
}

export default Model