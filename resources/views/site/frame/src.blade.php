<meta charset="UTF-8">
<meta name="csrf-token" content="{{ csrf_token() }}" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="keywords" content="{{@$site->business}}" />
<meta name="description" content="{{@$site->introduction}}" />
<title> {{@$site->company_name}} </title>


<link rel="stylesheet" href="/sites/site01/css/site.css">
<script type="text/javascript" src="http://g.alicdn.com/sj/lib/jquery/dist/jquery.min.js"></script>
<script src="/assets/js/common/vue.js"></script>

<script>
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
</script>
