// 공지 관련 타입 정의
import { NavigateFunction } from "react-router-dom";

// 공통 공지사항 속성
export type CommonNotice = {
  title: string;
  writerGen: number;
  writer: string;
  noticeHit?: number;
  isImportant: boolean;
  createdTime: string; // LocalDateTime 타입
};

// NoticeList 타입
export interface NoticeListType extends CommonNotice {
  noticeId: number;
  isNewNotice: boolean;
}
// NoticeList props 타입
export interface NoticeListProps {
  noticeList: NoticeListType[];
  navigate: NavigateFunction;
}
// NoticeDetail 타입
export interface NoticeDetailType extends CommonNotice {
  updatedTime?: string; //LocalDateTime 타입
  content: string;
}
// PostNotice 타입
export type PostNoticeType = {
  title: string;
  content: string;
  isImportant: boolean;
};
