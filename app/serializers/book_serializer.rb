class BookSerializer
  include JSONAPI::Serializer
  attributes :id, :title, :description, :price, :discount_rate, :image, :created_at, :updated_at, :image_url
end
