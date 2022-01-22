const unimath_latex={
	convtbl: {
		'²': '\\sup{2}',
		'∅': '\\emptyset',
		'∞': '\\infty',
		'∪': '\\cup',
		'≤': '\\leqslant',
		'≥': '\\geqslant',
	},
	conv(s){for(const k in this.convtbl){s=
	s.replace(k,this.convtbl[k])}return s;}
};
