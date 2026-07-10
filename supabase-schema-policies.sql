-- Execute depois das tabelas, ajustando se o nome do bucket for diferente.
alter table vehicles enable row level security;
alter table vehicle_images enable row level security;

create policy "Public can read available vehicles"
on vehicles for select
using (sold = false or auth.role() = 'authenticated');

create policy "Authenticated can manage vehicles"
on vehicles for all
to authenticated
using (true)
with check (true);

create policy "Public can read vehicle images"
on vehicle_images for select
using (
  exists (
    select 1
    from vehicles
    where vehicles.id = vehicle_images.vehicle_id
    and (vehicles.sold = false or auth.role() = 'authenticated')
  )
);

create policy "Authenticated can manage vehicle images"
on vehicle_images for all
to authenticated
using (true)
with check (true);

-- Storage policies para bucket vehicle-photos.
create policy "Public can read vehicle photos"
on storage.objects for select
using (bucket_id = 'vehicle-photos');

create policy "Authenticated can upload vehicle photos"
on storage.objects for insert
to authenticated
with check (bucket_id = 'vehicle-photos');

create policy "Authenticated can update vehicle photos"
on storage.objects for update
to authenticated
using (bucket_id = 'vehicle-photos')
with check (bucket_id = 'vehicle-photos');

create policy "Authenticated can delete vehicle photos"
on storage.objects for delete
to authenticated
using (bucket_id = 'vehicle-photos');
