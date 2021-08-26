import * as React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Logo, Ilustrasi }  from "../../assets";

export default class Splash extends React.Component {

	componentDidMount() {
		setTimeout(()=>{
			this.props.navigation.replace('Home')
		}, 3000)
	}
	render() {
		return (
			<View style={styles.page}>
				<Logo/>
				<View style={styles.ilustrasi}>
					<Ilustrasi/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	page: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center'
	},
	ilustrasi : {
		position: 'absolute',
		bottom: 0,
		right: 0
	}
})