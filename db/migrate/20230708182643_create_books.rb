class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title
      t.text :description
      t.decimal :price
      t.decimal :discount_rate

      t.timestamps
    end
  end
end
