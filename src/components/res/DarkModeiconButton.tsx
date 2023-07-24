	import {IconButton, usecolorMode} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/react';
import React from "react"
function DarkModeIconButton({
	...rest
}:React.ComponentPropsWithoutRef<typeof IconButton>){
	const { colorMode, toggleuseColorMode}= usecolorMode();
	const  isDark =  colorMode ==='dark'
	
	return(
		<IconButton
		onClick={toggleuseColorMode}
		icon={isDark ? <MoonIcon /> :<SunIcon />}aria-label={'dark-mode-toggle'} {...rest}
		/>
	)
}

export default  DarkModeIconButton

