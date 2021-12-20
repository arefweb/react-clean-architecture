
export const paginatedPagesArray = (arr, pageNum)=>{
  let pagesArr = [];
  let z = 0;

  arr.forEach((item, i) => {
    let n = i + 1;
    if (i === 0) {
      pagesArr[z] = [item];
    } else {
      if (n % pageNum !== 0) {
        if (pagesArr[z]) {
          pagesArr[z].push(item);
        } else {
          pagesArr[z] = [item];
        }
      } else {
        pagesArr[z].push(item);
        return (z += 1);
      }
    }
  });

  return pagesArr;
}
