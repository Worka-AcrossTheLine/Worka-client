export const errorHandler = (err:number):void => {
    if (err === 400) {
        alert('잘못된 요청입니다.')
    }else if (err === 500) {
        alert('네트워크에러')
    }else if (err === 404) {
        alert('페이지가 존재하지 않습니다.')
    }else if (err === 413) {
        alert('파일이 너무 큽니다')
    }
}