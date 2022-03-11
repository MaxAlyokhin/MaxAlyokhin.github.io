export default function tableInit() {
  let table = new DataTable('.invest-table table', {
    // scrollX: true,
    dom: 'rt<"bottom"lip><"clear">',
    language: {
      paginate: {
        previous: `
        <span class="prev-icon">
          <a href="#"><img src="/img/backward.png" alt=""></a>
        </span>`,
        next: `
        <span class="next-icon" >
          <a href="#"><img style="transform: rotate(180deg)" src="/img/backward.png" alt=""></a>
        </span>`,
      },
      lengthMenu: `Показывать: _MENU_`,
      info: '_START_ из _TOTAL_',
    },
  })
}
