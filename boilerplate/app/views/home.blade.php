@extends('layouts.default')

@section('body')
    <div class="page-wrapper js-region-main"></div>
@stop

@section('scripts')
    @if (App::environment('local'))
        <script src="/vendor/requirejs/require.js" data-main="/js/main.js"></script>
    @else
        <script src="/js/main.min.js"></script>
    @endif
@stop
