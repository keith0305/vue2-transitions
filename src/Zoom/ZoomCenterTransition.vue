<!-- Accepted transitionConfigCSS:
	{
		'--scale3d': '0.3',
	}
-->
<template>
	<component
		:is="componentType"
		:tag="tag"
		v-bind="$attrs"
		v-on="hooks"
		enter-active-class="zoomIn"
		move-class="zoom-move"
		leave-active-class="zoomOut"
	>
		<slot></slot>
	</component>
</template>

<script>
import { baseTransition } from '../mixins/index.js';

export default {
	name: 'zoom-center-transition',
	mixins: [baseTransition],
};
</script>

<style lang="scss">
@import "move";

@keyframes zoomIn {
	from {
		opacity: 0;
		transform: scale3d(var(--scale3d, 0.3), var(--scale3d, 0.3), var(--scale3d, 0.3));
	}

	50% {
		opacity: 1;
	}
}

.zoomIn {
	animation-name: zoomIn;
}

@keyframes zoomOut {
	from {
		opacity: 1;
	}

	50% {
		opacity: 0;
		transform: scale3d(var(--scale3d, 0.3), var(--scale3d, 0.3), var(--scale3d, 0.3));
	}

	to {
		opacity: 0;
	}
}

.zoomOut {
	animation-name: zoomOut;
}
</style>
