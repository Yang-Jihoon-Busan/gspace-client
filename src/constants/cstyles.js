import { Platform, StyleSheet } from "react-native";
import colors from './appcolors';
// const majorVersionIOS = parseInt(Platform.Version);

const cstyles = StyleSheet.create({
	text: {
		fontSize: 14,
		color: colors.textPrimary,
	},
	input: {
		paddingHorizontal: 16,
		height: 48,
		color: colors.textPrimary,
		fontSize: 16,
		borderColor: '#D2DCE8',
		borderRadius: 10,
		borderWidth: 1,
	},
	labelContainer: {
		flexDirection: 'row', alignItems: 'baseline'
	},
	inputLabel: {
		fontSize: 15, color: colors.textPrimary
	},
	errorText: {
		fontSize: 12, color: '#E50000'
	},
	borderRounded: {
		borderColor: colors.borderColor,
		borderWidth: 1,
		borderRadius: 6,
	},
	rootView: {
		paddingHorizontal: 22,
		paddingTop: 20,
		paddingBottom: 50,
	},
	badge: {
		borderRadius: 12,
		paddingHorizontal: 9,
		paddingVertical: 3,
		fontSize: 12,
		fontWeight: 'bold',
		color: colors.textPrimary,
	},
	modalTitle: {
		fontSize: 22,
		color: colors.textPrimary,
		fontWeight: 'bold',
	},
	modalSubtitle: {
		marginTop: 10,
		fontSize: 15,
		color: colors.textPrimary,
	},
	roundIcon: {
		width: 38, height: 38, borderRadius: 19, alignItems: 'center', justifyContent: 'center', borderColor: colors.borderColor, borderWidth: 1,
	},
});

export default cstyles;