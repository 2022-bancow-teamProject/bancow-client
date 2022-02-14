export const useObserver = () => {
	const onIntersect: IntersectionObserverCallback = ([entry]) => {
		if (entry.isIntersecting) {
			// 관찰 대상 자체에 class를 주는 방식
			entry.target.classList.add('go');
		} else {
			entry.target.classList.remove('go');
		}
	};
	const observer = new IntersectionObserver(onIntersect, { threshold: 0 });
	return observer;
};
