$(function() {
    var result;
    $.getJSON("https://atlas.jifo.co/api/connectors/8bfb2673-6ecc-4dd9-8372-a4064c8ef324", function(json) {
        result = json.data[0];
        result.shift();
        $('#extra-bonus-voucher-table').DataTable({
            data: result,
            language: {
                url: 'https://cdn.datatables.net/plug-ins/1.11.3/i18n/zh_Hant.json',
            },
            order: [
                [0, 'asc']
            ],
            responsive: true
        });
    });
});