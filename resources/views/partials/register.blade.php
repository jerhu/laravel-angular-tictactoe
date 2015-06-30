register.blade.php


{!! Form::open(['url' => 'register']) !!}
  <div class="form-group {!! $errors->has('name') ? 'has-error' : '' !!}">
  {!! Form::text('name', null, ['class' => 'form-control', 'placeholder' => 'Name']) !!}
  {!! $errors->first('name', '<small class="help-block">:message</small>') !!}
  </div>
    <div class="form-group {!! $errors->has('email') ? 'has-error' : '' !!}">
  {!! Form::email('email', null, ['class' => 'form-control', 'placeholder' => 'Votre email']) !!}
  {!! $errors->first('email', '<small class="help-block">:message</small>') !!}
  </div>
  {!! Form::submit('Register', ['class' => 'btn btn-info pull-right']) !!}
{!! Form::close() !!}
