$(function () {
  const expenses = [];

  $('#expense-form').on('submit', function (e) {
    e.preventDefault();

    const date = $('#date').val();
    const title = $('#title').val().trim();
    const amount = parseFloat($('#amount').val());

    if (!date || !title || isNaN(amount)) {
      alert('Please fill date, title and a valid amount.');
      return;
    }

    const record = { date, title, amount };
    expenses.push(record);

    console.log('expenses array:', expenses);

    const tr = $('<tr>');
    tr.append(`<td>${record.date}</td>`);
    tr.append(`<td>${record.title}</td>`);
    tr.append(`<td>${record.amount.toFixed(2)}</td>`);
    tr.append(`<td>
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </td>`);

    $('#expenses-table tbody').append(tr);

    this.reset();
  });
});