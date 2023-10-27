export const StatusCard = ({ title, icon }: { title: string; icon: any }) => {
  return (
    <div className="border-2 border-dashed border-neutral-500 rounded-lg flex-1 flex items-center flex-col justify-center">
      {icon}
      <h4 className="mt-5 text-xl text font-bold">{title}</h4>
    </div>
  );
};
