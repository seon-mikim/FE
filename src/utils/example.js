/*utils 폴더는 보통 재사용 가능한 작은 함수나 로직들을 모아두는 곳 */

export const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  };