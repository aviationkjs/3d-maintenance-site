# 3D Maintenance Site

정비물품 3D 모델을 둘러보고, 사용/정비 안내를 확인하는 교육용 사이트입니다.

## 구성
- `index.html` — 홈 (카테고리 바로가기, 최근 등록 모델)
- `catalog.html` — 카탈로그 (카테고리 필터, 검색, 관리자 모드에서 항목 추가)
- `detail.html` — 모델 상세 (3D 뷰어, glb 교체, 사용/정비 안내 텍스트 편집)
- `assets/` — 공용 스타일/스크립트, Firebase 초기화
- `firebase-rules/` — Realtime Database, Storage 보안 규칙 (Firebase 콘솔에 붙여넣어 적용)

## 데이터
- Firebase Realtime Database (`appliances/{id}`: name, category, glbUrl, procedure, updatedAt)
- Firebase Storage (`models/{id}/...glb`)

## 관리자 모드
카탈로그/상세 페이지 상단의 "관리자 모드"에서 비밀번호를 입력하면 항목 추가, glb 교체, 안내 텍스트 편집이 가능합니다.

⚠️ 이 비밀번호는 화면 노출을 막는 용도일 뿐, 데이터베이스 규칙 자체가 인증을 요구하지 않아서 완전한 보안은 아닙니다. 추후 Firebase Authentication 도입을 권장합니다.
