import { Platform, StyleSheet } from "react-native";
import colors from './appcolors';
// const majorVersionIOS = parseInt(Platform.Version);

const cstyles = StyleSheet.create({
	text: {
		fontSize: 14,
		color: colors.textPrimary,
	},
	input: {
		paddingHorizontal: 15,
		height: 44,
		color: colors.textPrimary,
		fontSize: 15,
		backgroundColor: '#202020',
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
	section: { marginVertical: 30 },
	infoItem: { marginVertical: 10 },
	infoLabel: { fontSize: 18, color: 'white' },
	infoContent: { fontSize: 15, color: colors.textSecondary },
});

export default cstyles;