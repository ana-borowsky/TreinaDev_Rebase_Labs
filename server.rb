require 'sinatra'
require "sinatra/cors"
require 'rack/handler/puma'
require 'csv'
require 'pg'

set :allow_origin, "*"
set :allow_methods, "GET,HEAD,POST"
set :allow_headers, "content-type,if-modified-since"
set :expose_headers, "location,link"

conn = PG.connect("postgres://postgres@localhost:5432", dbname: 'rebase_labs')

get '/tests' do
  rows = CSV.read("./data.csv", col_sep: ';')

  columns = rows.shift

  rows.map do |row|
    row.each_with_object({}).with_index do |(cell, acc), idx|
      column = columns[idx]
      acc[column] = cell
    end
  end.to_json
end

get '/hello' do
  'Hello world!'
end

get '/data' do
  sql = "SELECT * FROM data WHERE token_resultado_exame = '#{params['token']}'"
  puts sql
  data = conn.exec(sql)
  data.to_a.to_json
end

Rack::Handler::Puma.run(
  Sinatra::Application,
  Port: 3000,
  Host: '0.0.0.0'
)