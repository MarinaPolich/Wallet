import { useSelector } from 'react-redux';

// 
//   "transactionDate": "20221128",
//   "type": "EXPENSE",
//   "categoryId": "719626f1-9d23-4e99-84f5-289024e437a8",
//   "comment": "other",
//   "amount": -20
// 

export const ModalAddTransaction = () => {
   const expense = useSelector(state => state.transaction.expenseCategories); 

   function add(e) {
     e.preventDefault();
     const form = e.currentTarget;
     const transaction = {
       transactionDate: form.transactionDate.value,
       type: 'EXPENSE', //написано только на расходы. 
       categoryId: form.category.value,
       coment: form.comment.value,
       amount: +form.amount.value * -1,
     };
     // дальше диспатч с данніми addTransaction (transaction/operation)
     //в слайсе нет обработки добавления
     //если запутаетесь я напишу или помогу
     console.log('transaction ======= ', transaction);
  }
  //написано только на расходы. 
  return (
    <form onSubmit={add}>
      Add transaction
      <label>
        data
        <input type="data" name="transactionDate" required />
      </label>
      <label>
        comment
        <input type="text" name="comment" />
      </label>
      <label>
        amount
        <input type="text" name="amount" />
      </label>
      <label>
        category
        <select name="category">
          {Object.entries(expense).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add transaction</button>
    </form>
  );
  
};
