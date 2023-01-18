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
  data = conn.exec(sql)
  data = data.to_a

  formatted_data = Hash.new

  formatted_data = {
    result_token: data[0].values[11],
    result_date: data[0].values[12],
    cpf: data[0].values[0],
    name: data[0].values[1],
    email: data[0].values[2],
    birthday: data[0].values[3],
    doctor: {
        crm: data[0].values[7],
        crm_state: data[0].values[8],
        name: data[0].values[9]
      },
      tests:[
          {
            type: data[0].values[13],
            limits: data[0].values[14],
            result: data[0].values[15]
          },
          {
            type: data[1].values[13],
            limits: data[1].values[14],
            result: data[1].values[15]
          },
          {
            type: data[2].values[13],
            limits: data[2].values[14],
            result: data[2].values[15]
          },
          {
            type: data[3].values[13],
            limits: data[3].values[14],
            result: data[3].values[15]
          },
          {
            type: data[4].values[13],
            limits: data[4].values[14],
            result: data[4].values[15]
          },
          {
            type: data[5].values[13],
            limits: data[5].values[14],
            result: data[5].values[15]
          },
          {
            type: data[6].values[13],
            limits: data[6].values[14],
            result: data[6].values[15]
          },
          {
            type: data[7].values[13],
            limits: data[7].values[14],
            result: data[7].values[15]
          },
          {
            type: data[8].values[13],
            limits: data[8].values[14],
            result: data[8].values[15]
          },
          {
            type: data[9].values[13],
            limits: data[9].values[14],
            result: data[9].values[15]
          },
          {
            type: data[10].values[13],
            limits: data[10].values[14],
            result: data[10].values[15]
          },
          {
            type: data[11].values[13],
            limits: data[11].values[14],
            result: data[11].values[15]
          },
          {
            type: data[12].values[13],
            limits: data[12].values[14],
            result: data[12].values[15]
          }
      ]
  }

formatted_data = formatted_data.to_json

end

Rack::Handler::Puma.run(
  Sinatra::Application,
  Port: 3000,
  Host: '0.0.0.0'
)