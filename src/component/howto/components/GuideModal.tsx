import React, { Dispatch, SetStateAction, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { GoX } from 'react-icons/go';
import { CenteredRowBox } from '../../../common/layouts';
import styled from 'styled-components';

interface ModalProps {
	step: number;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const urls = [
	'https://repackager.wixmp.com/wixmp-vod/38915a2a-1bc7-4668-bca6-70084ed5b181/video/6991bb1c27134f2c9689bf0fa0913fd0/,1080p,480p,720p,/mp4/file.mp4.urlset/master.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcHA6cHJpdmF0ZW1lZGlhIiwiaXNfY2xpcCI6ZmFsc2UsInZpZGVvX2lkIjoiNjk5MWJiMWMyNzEzNGYyYzk2ODliZjBmYTA5MTNmZDAiLCJzdWIiOiJ1c2VyOnByaXZhdGVtZWRpYSIsImV4cCI6MTY0MzY1Njc0MH0.bG2KMMDNxYDNvXURGxh2OZzM0Fpd1RSG78fPSPuNQPQ',
	'https://repackager.wixmp.com/wixmp-vod/38915a2a-1bc7-4668-bca6-70084ed5b181/video/9b5e6239836f4cfabccf95fc01d53878/,480p,720p,1080p,/mp4/file.mp4.urlset/master.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcHA6cHJpdmF0ZW1lZGlhIiwiaXNfY2xpcCI6ZmFsc2UsInZpZGVvX2lkIjoiOWI1ZTYyMzk4MzZmNGNmYWJjY2Y5NWZjMDFkNTM4NzgiLCJzdWIiOiJ1c2VyOnByaXZhdGVtZWRpYSIsImV4cCI6MTY0MzUxOTEwMH0.tvEbBtQLmK9ytfJ58he3SEhIbMKV6R_kDMtfeHzc9qk',
	'https://repackager.wixmp.com/wixmp-vod/38915a2a-1bc7-4668-bca6-70084ed5b181/video/2d17b7ceff114ccb96de56a4846f0624/,1080p,480p,720p,/mp4/file.mp4.urlset/master.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcHA6cHJpdmF0ZW1lZGlhIiwiaXNfY2xpcCI6ZmFsc2UsInZpZGVvX2lkIjoiMmQxN2I3Y2VmZjExNGNjYjk2ZGU1NmE0ODQ2ZjA2MjQiLCJzdWIiOiJ1c2VyOnByaXZhdGVtZWRpYSIsImV4cCI6MTY0MzUyNzg2MH0.UO94CZ0m3cFPPFSzSlhCedI2GfIqYQDVHHlEIUkvS3k',
	'https://repackager.wixmp.com/wixmp-vod/38915a2a-1bc7-4668-bca6-70084ed5b181/video/2964606c56124cf0b5a704e34b2a1bb6/,480p,720p,1080p,/mp4/file.mp4.urlset/master.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcHA6cHJpdmF0ZW1lZGlhIiwiaXNfY2xpcCI6ZmFsc2UsInZpZGVvX2lkIjoiMjk2NDYwNmM1NjEyNGNmMGI1YTcwNGUzNGIyYTFiYjYiLCJzdWIiOiJ1c2VyOnByaXZhdGVtZWRpYSIsImV4cCI6MTY0MzU0NTQ0MH0.CvAYDFAXZUSKcks2O3D88cti586umY12yfUmI_VbwnM',
	'https://repackager.wixmp.com/wixmp-vod/38915a2a-1bc7-4668-bca6-70084ed5b181/video/f74139edeabf4561bca1d1a37df68d56/,480p,720p,1080p,/mp4/file.mp4.urlset/master.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcHA6cHJpdmF0ZW1lZGlhIiwiaXNfY2xpcCI6ZmFsc2UsInZpZGVvX2lkIjoiZjc0MTM5ZWRlYWJmNDU2MWJjYTFkMWEzN2RmNjhkNTYiLCJzdWIiOiJ1c2VyOnByaXZhdGVtZWRpYSIsImV4cCI6MTY0MzUxOTgyMH0.DssAoW7wjmxHLPG_lJl8lcOhpVfLx2AkRe3Qz-_BNJ0'
];

const GuideModal: React.FC<ModalProps> = ({ step, setIsOpen }) => {
	const modalHandler = () => {
		setIsOpen((curr) => !curr);
	};

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, []);
	return (
		<Modal>
			<PlayerWrapper>
				<CloseBox onClick={modalHandler} />
				<ReactPlayer width="100%" height="100%" url={urls[step]} playing controls></ReactPlayer>
			</PlayerWrapper>
		</Modal>
	);
};

export const Modal = styled(CenteredRowBox)`
	position: fixed;
	overflow: hidden;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 100;
	background-color: rgba(0, 0, 0, 0.6);
`;

export const PlayerWrapper = styled.div`
	width: 54%;
	max-width: 2000px;
	height: 33.6vw;
	position: relative;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 70%;
		height: 44.6vw;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 68%;
		height: 44.8vw;
		@media only screen and (max-width: 285px) {
			width: 100%;
		}
	}
`;

export const CloseBox = styled(GoX)`
	position: absolute;
	right: 0;
	top: -50px;
	font-size: 40px;
	color: #fff;
	@media ${(props) => props.theme.breakpoints.md} {
		top: -40px;
		font-size: 30px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		top: -32px;
		font-size: 26px;
	}
`;

export default GuideModal;
