<template>
	<component
		:is="componentType"
		:tag="tag"
		v-bind="$attrs"
		v-on="hooks"
		enter-active-class="slideXRightIn"
		move-class="slide-move"
		leave-active-class="slideXRightOut"
	>
		<slot></slot>
	</component>
</template>
<script>
import { baseTransition } from '../mixins/index.js';

export default {
	name: 'slide-x-right-transition',
	mixins: [baseTransition],
	props: {
		styles: {
			type: Object,
			default: () => {
				return {
					animationFillMode: 'both',
					animationTimingFunction: 'cubic-bezier(.25,.8,.50,1)',
				};
			},
		},
	},
};
</script>
<style lang="scss">
@import "move";

@keyframes slideXRightIn {
	from {
		opacity: 0;
		transform: translateX(var(--translateX));
	}

	to {
		opacity: 1;
		transform: translateX(0);
	}
}

.slideXRightIn {
	--translateX: 150px;
	animation-name: slideXRightIn;
}

@keyframes slideXRightOut {
	from {
		opacity: 1;
		transform: translateX(0);
	}

	to {
		opacity: 0.5;
		transform: translateX(var(--translateX));
	}
}

.slideXRightOut {
	animation-name: slideXRightOut;
}
</style>
