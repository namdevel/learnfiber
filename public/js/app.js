$("#search").on("click", () => {
    $("#search").prop("disabled", true);
    $("#search").html("Please wait...");
    ip = $("#ip").val();
    $("#ip").prop("disabled", true);
    $("#result").val("");
    $.getJSON("/geo/" + ip, (res) => {
    $("#result").val(JSON.stringify(res, null, 4));
        $("#ip").prop("disabled", false);
        $("#search").prop("disabled", false);
        $("#search").html("Search");
    });
});
